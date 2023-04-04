const data = [
    {
        "id": 6,
        "stageName": "STAGE",
        "description": "this is a STAGE stage",
        "createdBy": "Rohit",
        "updatedBy": "2501819a-f0bd-4f5c-b80d-5ec508b1531f",
        "status": "Active",
        "createdAt": "2023-04-03T11:50:56.358Z",
        "updatedAt": "2023-04-03T11:50:56.358Z"
    },
    {
        "id": 4,
        "stageName": "STAGE",
        "description": "this is a STAGE stage",
        "createdBy": "7fea9733-997e-458f-b7ef-72aad8df2c86",
        "updatedBy": "7fea9733-997e-458f-b7ef-72aad8df2c86",
        "status": "Active",
        "createdAt": "2023-04-03T11:50:16.290Z",
        "updatedAt": "2023-04-03T11:50:16.290Z"
    },
    {
        "id": 3,
        "stageName": "STAGE",
        "description": "this is a STAGE stage",
        "createdBy": "7fea9733-997e-458f-b7ef-72aad8df2c86",
        "updatedBy": "7fea9733-997e-458f-b7ef-72aad8df2c86",
        "status": "Active",
        "createdAt": "2023-03-26T16:44:49.859Z",
        "updatedAt": "2023-03-26T16:44:49.859Z"
    },
    {
        "id": 2,
        "stageName": "PRE",
        "description": "this is a PRE stage",
        "createdBy": "7fea9733-997e-458f-b7ef-72aad8df2c86",
        "updatedBy": "7fea9733-997e-458f-b7ef-72aad8df2c86",
        "status": "Active",
        "createdAt": "2023-03-26T16:44:21.071Z",
        "updatedAt": "2023-03-26T16:44:21.071Z"
    },
    {
        "id": 1,
        "stageName": "FINAL",
        "description": "this is a FINAL stage",
        "createdBy": "7fea9733-997e-458f-b7ef-72aad8df2c86",
        "updatedBy": "7fea9733-997e-458f-b7ef-72aad8df2c86",
        "status": "Active",
        "createdAt": "2023-03-26T16:44:08.848Z",
        "updatedAt": "2023-03-26T16:44:08.848Z"
    }
];
let add = 0;
for (let i =0;i< data.length;i++){
    add+=data[i].id ;

}
console.log(add);

