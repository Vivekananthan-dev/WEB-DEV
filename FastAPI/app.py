from fastapi import FastAPI

app = FastAPI()

@app.get("/api/users")
def get_users():
    return{
        "messsage":"User sweta"
    }

@app.post("/api/users",status_code=201)
def createUser(name:str,email:str):
    return{
        "message": "user created",
        "user":{
            "name": name,
            "email": email
        }
    }