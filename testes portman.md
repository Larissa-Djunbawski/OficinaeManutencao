>>> VEHICLE
post http://localhost:6000/vehicle

{
  "plate": "ABC1234",
  "model": "fusca",
  "year": "1800",
  "owner": "joão"
}

get http://localhost:6000/vehicle

put http://localhost:6000/vehicle/ colar id



_____________________________________
>>>WORKSHOP
post http://localhost:6000/workshop
{
  "name": "oficinas",
  "adress": "rua: carlos cavalcante 001",
  "specialties": "MOTOR"
}

get http://localhost:6000/workshop

put http://localhost:6000/workshop/ colar id
{
  "name": "oficinas1",
  "adress": "rua: carlos cavalcante 001",
  "specialties": "MOTOR"
}

delete http://localhost:6000/workshop

____________________________________________

>>>MAINTENANCE
post http://localhost:6000/maintenance
 {
  "workshop": "colar id",
  "vehicle": "colar id",
   "services": [
    {
      "name": "Troca de óleo",
      "price": 100
    },
    {
      "name": "Alinhamento",
      "price": 50
    }
  ],
    "name":"trocar pneu",
    "price" : "20",
  "date": "2024-10-10",
  "totalCoast": "500"
}

