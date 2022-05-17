from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn             
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# filepath= "../modal/67"

MODEL = tf.keras.models.load_model("../models/67")
beta_MODEL = tf.keras.models.load_model("../models/68")


CLASS_NAMES = ["Noisy", "With out Noise"]


@app.get("/ping")    

async  def ping():
    return "heloo"

def read_file_as_image(data) -> np.ndarray:       
    image = np.array(Image.open(BytesIO(data)))     
    return image                                    


    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
confidence = np.max[(prediction[0])]
                                                              
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

if __name__=="__main__":
    uvicorn.run(app,host='localhost',port=8000)
