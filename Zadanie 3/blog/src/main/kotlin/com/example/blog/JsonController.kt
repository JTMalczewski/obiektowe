package com.example.blog

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class JsonController @Autowired constructor(
    private val eagerAuthorizationService: EagerAuthorizationService,
    private val lazyAuthorizationService: LazyAuthorizationService
) {

    @GetMapping("/json")
    fun json(@RequestParam username: String, @RequestParam password: String): List<String> {
        if (eagerAuthorizationService.authorize(username, password)) {
            return listOf("Item 1", "Item 2", "Item 3")
        } else {
            throw UnauthorizedException("Invalid username or password")
        }
    }
}

@Service
class EagerAuthorizationService {
    fun authorize(username: String, password: String): Boolean {
        // Mock authorization logic
        return username == "admin" && password == "password"
    }
}

@Service
class LazyAuthorizationService private constructor() {
    fun authorize(username: String, password: String): Boolean {
        // Mock authorization logic
        return username == "admin" && password == "password"
    }

    companion object {
        val instance: LazyAuthorizationService by lazy { LazyAuthorizationService() }
    }
}

class UnauthorizedException(message: String): RuntimeException(message)
