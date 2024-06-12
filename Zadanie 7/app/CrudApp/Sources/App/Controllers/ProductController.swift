import Fluent
import Vapor

struct ProductController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let products = routes.grouped("products")
        products.get(use: index)
        products.post(use: create)
        products.group(":productID") { product in
            product.delete(use: delete)
            product.put(use: update)
        }
    }

    func index(req: Request) throws -> EventLoopFuture<[Product]> {
        return Product.query(on: req.db).all()
    }

    func create(req: Request) throws -> EventLoopFuture<Product> {
        let product = try req.content.decode(Product.self)
        return product.save(on: req.db).map { product }
    }

    func delete(req: Request) throws -> EventLoopFuture<HTTPStatus> {
        return Product.find(req.parameters.get("productID"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { $0.delete(on: req.db) }
            .transform(to: .ok)
    }

    func update(req: Request) throws -> EventLoopFuture<Product> {
        let input = try req.content.decode(Product.self)
        return Product.find(req.parameters.get("productID"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { existingProduct in
                existingProduct.name = input.name
                existingProduct.description = input.description
                return existingProduct.save(on: req.db).map { existingProduct }
            }
    }
}
