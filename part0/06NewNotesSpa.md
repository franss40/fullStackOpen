sequenceDiagram
participant browser
participant server

Note right of browser: request to url
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server->>browser: HTTP 201 created, response {"message":"note created"}
deactivate server

