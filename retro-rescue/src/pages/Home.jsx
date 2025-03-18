import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/productService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useAuth } from "../context/AuthContext";
import { db } from "../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const [username, setUsername] = useState(null);

  // Obtener nombre del usuario desde Firestore si no está en displayName
  useEffect(() => {
    const fetchUsername = async () => {
      if (user) {
        if (user.displayName) {
          setUsername(user.displayName);
        } else {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUsername(userDoc.data().username);
          }
        }
      }
    };
    fetchUsername();
  }, [user]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        const featuredProducts = data.sort(() => 0.5 - Math.random()).slice(0, 5);
        setProducts(featuredProducts);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col nes-container with-title m-5 justify-center min-h-screen">
      {/* Bienvenida personalizada */}
      {user ? (
        <div className="nes-container is-primary with-title p-4 text-center">
          <h2 className="title" style={{ color: "black" }}>🎮 ¡Bienvenido, {username || "Gamer"}! 🎮</h2>
          <p>Nos alegra verte en nuestra tienda retro.</p>
          {user.metadata?.creationTime && (
            <p className="nes-text is-success">
              Miembro desde: {new Date(user.metadata.creationTime).toLocaleDateString()}
            </p>
          )}
          <Link to="/products" className="nes-btn is-success mt-3">
            🔥 Explorar más consolas
          </Link>
        </div>
      ) : (
        <div className="nes-container is-warning with-title p-4 text-center">
          <h2 className="title">🕹️ ¡Bienvenido a Tienda Retro! 🕹️</h2>
          <p>Inicia sesión para ver nuestras ofertas exclusivas.</p>
          <Link to="/login" className="nes-btn is-primary mt-3">
            🔑 Iniciar Sesión
          </Link>
        </div>
      )}

      {/* Carrusel de productos destacados */}
      {products.length > 0 ? (
        <div className="w-full mx-auto mt-5">
        <h3 className="text-center mb-4 nes-text is-primary text-xl">Productos Destacados</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true} 
          breakpoints={{
            
            375: {
              slidesPerView: 1,
              spaceBetween: 10
            },
           
            768: {
              slidesPerView: 1,
              spaceBetween: 20
            },
           
            1024: {
              slidesPerView: 1,
              spaceBetween: 30
            },
           
            1280: {
              slidesPerView: 1,
              spaceBetween: 40
            },
          
            1440: {
              slidesPerView: 1,
              spaceBetween: 50
            }
          }}
          className="w-full max-w-4xl mx-auto" grandes
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="nes-container is-dark with-title p-3 md:p-6 lg:p-8 text-center">
                <h2 className="title text-base sm:text-lg md:text-xl lg:text-2xl">{product.name}</h2>
                <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-4 my-4">
                  <div className="flex justify-center md:w-1/3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain mx-auto"
                    />
                  </div>
                  <div className="md:w-2/3 md:text-left">
                    <div className="min-h-[80px] max-h-32 md:max-h-40 overflow-y-auto mb-4 px-2">
                      <p className="text-sm sm:text-base md:text-lg">{product.description}</p>
                    </div>
                    <p className="nes-text is-success text-lg sm:text-xl md:text-2xl font-bold mt-2">
                      ${product.price}
                    </p>
                    <Link 
                      to={`/product/${product.id}`} 
                      className="nes-btn is-primary text-sm sm:text-base md:text-lg mt-4 px-4 py-2"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      ) : (
        <p className="nes-text is-error">Cargando productos...</p>
      )}

      {/* Botón para ver más productos */}
      <div className="text-center mt-5">
        <Link to="/products" className="nes-btn is-success">
          Ver Más Consolas
        </Link>
      </div>
    </div>
  );
};

export default Home;
