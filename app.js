/*
[
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Kabir",
            "last": "Saldanha"
        },
        "location": {
            "street": {
                "number": 4900,
                "name": "Rajpath"
            },
            "city": "Eluru",
            "state": "Karnataka",
            "country": "India",
            "postcode": 51776,
            "coordinates": {
                "latitude": "6.4069",
                "longitude": "-107.9805"
            },
            "timezone": {
                "offset": "+9:00",
                "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
        },
        "email": "kabir.saldanha@example.com",
        "login": {
            "uuid": "8cd7a477-caf6-47b7-90ac-c0f31a1fb148",
            "username": "redpeacock796",
            "password": "50spanks",
            "salt": "XO9xDREK",
            "md5": "a7c798f98f75e1f35c437425986792de",
            "sha1": "1bb24d5d58f54794139d05876adf8a1e376e0457",
            "sha256": "41c78ad68548e9ccdebbc0c887407d0f6cc5a67cf0717d0671670c2e74349bf6"
        },
        "dob": {
            "date": "1947-10-12T13:23:22.809Z",
            "age": 75
        },
        "registered": {
            "date": "2022-03-11T23:04:23.322Z",
            "age": 0
        },
        "phone": "7619702551",
        "cell": "9649599743",
        "id": {
            "name": "UIDAI",
            "value": "839016080070"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/23.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
        },
        "nat": "IN"
    }
]
*/

const app = Vue.createApp({
    data(){
            return{
                firstName: 'John', 
                lastName: 'Doe', 
                email: 'john@gmail.com',
                gender: 'male',
                picture: 'https://randomuser.me/api/portraits/men/10.jpg',
                phone: '1234567890',
                age: 30,
                streetname: '123 Main St',
                streetnumber: 123,
                city: 'New York',
                country: 'USA',
                postcode: '12345',
                title: 'Mr'
            }
    }, 

    methods:{
        async getUser(){
            const res = await fetch("https://randomuser.me/api")
            const {results} = await res.json()

            console.log(results);
            
            this.title = results[0].name.title,
            this.firstName = results[0].name.first, 
            this.lastName = results[0].name.last, 
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.age = results[0].dob.age,
            this.streetname = results[0].location.street.name,
            this.streetnumber = results[0].location.street.number,
            this.city = results[0].location.city,
            this.country = results[0].location.country,
            this.postcode = results[0].location.postcode,
            this.phone = results[0].phone,
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')