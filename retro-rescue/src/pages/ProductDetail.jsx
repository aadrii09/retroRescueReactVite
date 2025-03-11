import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {db} from '../services/firebaseConfig'
import {doc, getDoc} from 'firebase/firestore'

const ProductDetail = () => {

  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() =>{
    const fetchProduct = async () =>{
      try {
        const docRef = doc(db, 'products', id);
        const dosSnap = await getDoc(docRef);
        if (DocumentSnapshot.exists()) {
          setProduct(doscSnap.data());
        }else{
          console.error(`No hay doc en el id ${id}`)
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error.message);
      }
    }
    fetchProduct();
  }, [id]);

  return product ? (
    <div className='nes-container with-title m-5'>
        <h2 className='title'>{product.name}</h2>
        <img className='nes-avatar is-large' src={product.image} alt={product.name} />
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button className='nes-btn is-success'>Añadir al carrito</button>
    </div> 
) : <p className='nes-text is-error'>Cargando producto...</p>


}

export default ProductDetail