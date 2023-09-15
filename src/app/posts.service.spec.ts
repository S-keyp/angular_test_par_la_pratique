import { TestBed, inject } from "@angular/core/testing";
// Angular fournit un support pour les tests du client HTTP
// via le module : HttpClientTestingModule
// Toutes les requêtes sont mockées
// HttpTestingController permet de contrôler le mock généré par Angular
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { PostsService } from "./posts.service";

describe("PostsService", () => {
  let httpTestingController: HttpTestingController;
  let postsService: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    postsService = TestBed.inject(PostsService);
  });

  // ...

  it("getPosts() envoie une requête HTTP vers https://jsonplaceholder.typicode.com/posts", () => {
    postsService.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts[0]["title"]).toBe("Titre 1");
      expect(posts[1]["title"]).toBe("Titre 2");
    });

    const requete = httpTestingController.expectOne(
      "https://jsonplaceholder.typicode.com/posts"
    );

    expect(requete.request.method).toEqual("GET");
    requete.flush([{ id: 1, title: "Titre 1" }, { id: 2, title: "Titre 2" }]);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
 