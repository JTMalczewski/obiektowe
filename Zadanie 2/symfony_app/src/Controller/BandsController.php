<?php

namespace App\Controller;

use App\Entity\Bands;
use App\Form\BandsType;
use App\Repository\BandsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/bands')]
class BandsController extends AbstractController
{
    #[Route('/', name: 'app_bands_index', methods: ['GET'])]
    public function index(BandsRepository $bandsRepository): Response
    {
        return $this->render('bands/index.html.twig', [
            'bands' => $bandsRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_bands_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $band = new Bands();
        $form = $this->createForm(BandsType::class, $band);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($band);
            $entityManager->flush();

            return $this->redirectToRoute('app_bands_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('bands/new.html.twig', [
            'band' => $band,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_bands_show', methods: ['GET'])]
    public function show(Bands $band): Response
    {
        return $this->render('bands/show.html.twig', [
            'band' => $band,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_bands_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Bands $band, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(BandsType::class, $band);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_bands_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('bands/edit.html.twig', [
            'band' => $band,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_bands_delete', methods: ['POST'])]
    public function delete(Request $request, Bands $band, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$band->getId(), $request->getPayload()->get('_token'))) {
            $entityManager->remove($band);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_bands_index', [], Response::HTTP_SEE_OTHER);
    }
}
