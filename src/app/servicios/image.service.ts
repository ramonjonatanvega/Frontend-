import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  //Es la variable que se utilizará para guardar la url de una determinada imagen.
  url: string = "";

  constructor(private storage: Storage) { }

  /*Método que sube una imagen a Firebase, en la carpeta Imagenes, seguida de otra, según el componente, lo cual
  se realiza pasando el nombre, a través del parámetro name.
  */
  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagenes/${name}/${file.name}`);
    console.log(imgRef);
    uploadBytes(imgRef, file).then(response => {this.getImages(file, name)})
    .catch(error => console.log(error));

  }

  //Método que trae una determinada imagen, mediante la url.
  getImages(file: any, name: string){
    const imagesRef = ref(this.storage, `imagenes/${name}/`);
    list(imagesRef).then(
      async response => {
        for(let item of response.items) {
          if(file.name == item.name) {
            this.url = await getDownloadURL(item);
            console.log("la URL es: " + this.url);
          }
        }
      }).catch(error => console.log(error));
  }

}
