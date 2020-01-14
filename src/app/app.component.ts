import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'filter';

  persons = [
    {
      "index": 0,
      "name": "Lucy Thornton",
      "friends": [
        {
          "id": 0,
          "name": "Geraldine Cross"
        },
        {
          "id": 1,
          "name": "Coleman Hodge"
        },
        {
          "id": 2,
          "name": "Melva Hyde"
        },
        {
          "id": 3,
          "name": "Vera Dejesus"
        },
        {
          "id": 4,
          "name": "Navarro Guy"
        },
        {
          "id": 5,
          "name": "Jennifer Reilly"
        }
      ]
    },
    {
      "index": 1,
      "name": "Rowe Stout",
      "friends": [
        {
          "id": 0,
          "name": "Deena Wells"
        },
        {
          "id": 1,
          "name": "Marcia Foreman"
        },
        {
          "id": 2,
          "name": "Alejandra Summers"
        },
        {
          "id": 3,
          "name": "Brianna Vazquez"
        },
        {
          "id": 4,
          "name": "Faulkner Hinton"
        }
      ]
    },
    {
      "index": 2,
      "name": "Liza Blackburn",
      "friends": [
        {
          "id": 0,
          "name": "Obrien Hester"
        },
        {
          "id": 1,
          "name": "Antonia Buchanan"
        },
        {
          "id": 2,
          "name": "Mccarty Britt"
        },
        {
          "id": 3,
          "name": "Vance Green"
        },
        {
          "id": 4,
          "name": "Sharron Short"
        },
        {
          "id": 5,
          "name": "Colette Burgess"
        }
      ]
    },
    {
      "index": 3,
      "name": "Strong Ware",
      "friends": [
        {
          "id": 0,
          "name": "Knight Porter"
        },
        {
          "id": 1,
          "name": "Alexis Thomas"
        },
        {
          "id": 2,
          "name": "Armstrong Mcclure"
        },
        {
          "id": 3,
          "name": "Blanche Myers"
        },
        {
          "id": 4,
          "name": "Britt Riley"
        },
        {
          "id": 5,
          "name": "Garner Bishop"
        }
      ]
    },
    {
      "index": 4,
      "name": "Chavez Bradley",
      "friends": [
        {
          "id": 0,
          "name": "Earline Elliott"
        },
        {
          "id": 1,
          "name": "Barton Jackson"
        },
        {
          "id": 2,
          "name": "Erna Odonnell"
        },
        {
          "id": 3,
          "name": "Caldwell Marquez"
        },
        {
          "id": 4,
          "name": "Bertha Newman"
        }
      ]
    },
    {
      "index": 5,
      "name": "Goff Rojas",
      "friends": [
        {
          "id": 0,
          "name": "Stephenson Gamble"
        },
        {
          "id": 1,
          "name": "Rosales Acosta"
        },
        {
          "id": 2,
          "name": "Eve Barker"
        },
        {
          "id": 3,
          "name": "Burton Hancock"
        },
        {
          "id": 4,
          "name": "Valenzuela Hogan"
        },
        {
          "id": 5,
          "name": "Berg Miranda"
        }
      ]
    },
    {
      "index": 6,
      "name": "Estelle Hodges",
      "friends": [
        {
          "id": 0,
          "name": "Logan Brewer"
        },
        {
          "id": 1,
          "name": "Marion Brennan"
        },
        {
          "id": 2,
          "name": "Good Hartman"
        },
        {
          "id": 3,
          "name": "Dora Maynard"
        },
        {
          "id": 4,
          "name": "Dorsey Weaver"
        }
      ]
    },
    {
      "index": 7,
      "name": "Bruce Reynolds",
      "friends": [
        {
          "id": 0,
          "name": "Sampson Bolton"
        },
        {
          "id": 1,
          "name": "Karin Henderson"
        },
        {
          "id": 2,
          "name": "Lawson Hensley"
        },
        {
          "id": 3,
          "name": "Elisa Cantrell"
        },
        {
          "id": 4,
          "name": "Caroline Robles"
        },
        {
          "id": 5,
          "name": "Diaz Silva"
        }
      ]
    },
    {
      "index": 8,
      "name": "Carla Guerrero",
      "friends": [
        {
          "id": 0,
          "name": "Huffman Hardy"
        },
        {
          "id": 1,
          "name": "Hughes Horton"
        },
        {
          "id": 2,
          "name": "Cervantes Peterson"
        },
        {
          "id": 3,
          "name": "Brooks Le"
        },
        {
          "id": 4,
          "name": "Jamie Simpson"
        }
      ]
    },
    {
      "index": 9,
      "name": "Erin Montgomery",
      "friends": [
        {
          "id": 0,
          "name": "Vang Harper"
        },
        {
          "id": 1,
          "name": "Esther Gaines"
        },
        {
          "id": 2,
          "name": "Conley Baker"
        },
        {
          "id": 3,
          "name": "Bernadine Banks"
        },
        {
          "id": 4,
          "name": "Rochelle Carson"
        },
        {
          "id": 5,
          "name": "Molly Woods"
        }
      ]
    },
    {
      "index": 10,
      "name": "Hicks Payne",
      "friends": [
        {
          "id": 0,
          "name": "Lewis Orr"
        },
        {
          "id": 1,
          "name": "Daisy Stanley"
        },
        {
          "id": 2,
          "name": "Hutchinson Suarez"
        },
        {
          "id": 3,
          "name": "Luz Rasmussen"
        },
        {
          "id": 4,
          "name": "Roy Christensen"
        }
      ]
    },
    {
      "index": 11,
      "name": "Margaret Petty",
      "friends": [
        {
          "id": 0,
          "name": "Anna Gross"
        },
        {
          "id": 1,
          "name": "Debora Whitney"
        },
        {
          "id": 2,
          "name": "Manning Leblanc"
        },
        {
          "id": 3,
          "name": "Kelley Burch"
        },
        {
          "id": 4,
          "name": "Lupe Pierce"
        },
        {
          "id": 5,
          "name": "Lea Wright"
        }
      ]
    },
    {
      "index": 12,
      "name": "Wilkins Walter",
      "friends": [
        {
          "id": 0,
          "name": "Moore Carr"
        },
        {
          "id": 1,
          "name": "Beth Cardenas"
        },
        {
          "id": 2,
          "name": "Marshall Gentry"
        },
        {
          "id": 3,
          "name": "Letha Middleton"
        },
        {
          "id": 4,
          "name": "Janis Berger"
        },
        {
          "id": 5,
          "name": "Hinton Ryan"
        }
      ]
    },
    {
      "index": 13,
      "name": "Shannon Wilson",
      "friends": [
        {
          "id": 0,
          "name": "Miranda Riddle"
        },
        {
          "id": 1,
          "name": "Shepherd Zimmerman"
        },
        {
          "id": 2,
          "name": "Calderon Santiago"
        },
        {
          "id": 3,
          "name": "Willie Gardner"
        },
        {
          "id": 4,
          "name": "Levy Ochoa"
        },
        {
          "id": 5,
          "name": "Frye Larson"
        }
      ]
    },
    {
      "index": 14,
      "name": "Evangeline Santana",
      "friends": [
        {
          "id": 0,
          "name": "Bush Bowen"
        },
        {
          "id": 1,
          "name": "Alexandra Oliver"
        },
        {
          "id": 2,
          "name": "Carpenter Fischer"
        },
        {
          "id": 3,
          "name": "Goodwin Barry"
        },
        {
          "id": 4,
          "name": "Stevenson Carver"
        },
        {
          "id": 5,
          "name": "Mcconnell Bauer"
        }
      ]
    },
    {
      "index": 15,
      "name": "Myers Little",
      "friends": [
        {
          "id": 0,
          "name": "Latasha Phelps"
        },
        {
          "id": 1,
          "name": "Taylor Chapman"
        },
        {
          "id": 2,
          "name": "Mueller Callahan"
        },
        {
          "id": 3,
          "name": "Chris Galloway"
        },
        {
          "id": 4,
          "name": "Dana Merritt"
        },
        {
          "id": 5,
          "name": "Roxanne Gilbert"
        }
      ]
    },
    {
      "index": 16,
      "name": "Lisa Gordon",
      "friends": [
        {
          "id": 0,
          "name": "Nita Houston"
        },
        {
          "id": 1,
          "name": "Luna Ross"
        },
        {
          "id": 2,
          "name": "Josephine White"
        },
        {
          "id": 3,
          "name": "Kerr Adams"
        },
        {
          "id": 4,
          "name": "Best Mcdaniel"
        },
        {
          "id": 5,
          "name": "Wilkinson Lindsey"
        }
      ]
    },
    {
      "index": 17,
      "name": "Rebekah Joyner",
      "friends": [
        {
          "id": 0,
          "name": "Lina Watkins"
        },
        {
          "id": 1,
          "name": "Michael Cox"
        },
        {
          "id": 2,
          "name": "Sweet Wall"
        },
        {
          "id": 3,
          "name": "Penelope Williamson"
        },
        {
          "id": 4,
          "name": "Ferrell Schultz"
        }
      ]
    }
  ]

}
