# Retro Rescue Ecommerce

Retro Rescue es una aplicación ecommerce de consolas retro desarrollada con React y Vite. La aplicación permite a los usuarios explorar un catálogo de consolas retro, gestionar un carrito de compras y completar el proceso de checkout.

## Características

- **Catálogo de Productos:** Visualización de consolas retro con detalles e imágenes.
- **Búsqueda y Filtros:** Filtra productos por nombre, categoría y precio.
- **Autenticación:** Sistema de inicio de sesión para realizar compras.
- **Carrito de Compras:** Agrega, actualiza y elimina productos del carrito. Se persiste en localStorage.
- **Navegación:** Implementada con React Router para una experiencia fluida.

## Tecnologías

- **[React](https://reactjs.org/)**
- **[Vite](https://vitejs.dev/)**
- **JavaScript**
- **[React Router](https://reactrouter.com/)**
- **Context API de React** (AuthContext & CartContext)
- **Firebase** (para autenticación y base de datos)
- **nes.css** (librería retro para estilos)
- **CSS** (estilos personalizados o frameworks complementarios)

## Instalación y Comandos

Sigue estos pasos para arrancar el proyecto en otro ordenador:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/retro-rescue.git
   ```

2. **Accede al directorio del proyecto:**
   ```bash
   cd retro-rescue
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```
   o si usas Yarn:
   ```bash
   yarn install
   ```

4. **Ejecuta la aplicación en modo desarrollo:**
   ```bash
   npm run dev
   ```
   o con Yarn:
   ```bash
   yarn dev
   ```

5. **Construye la aplicación para producción:**
   ```bash
   npm run build
   ```
   o con Yarn:
   ```bash
   yarn build
   ```

6. **Sirve la aplicación en producción (opcional):**
   ```bash
   npm run preview
   ```
   o con Yarn:
   ```bash
   yarn preview
   ```

## Estructura del Proyecto

- **src/**  
  - **components/**: Componentes reutilizables.
  - **context/**: Proveedores de contexto (AuthContext, CartContext).
  - **pages/**: Vistas de la aplicación (Productos, Carrito, Checkout, etc.).
  - **routes/**: Configuración de rutas con React Router.
  - **services/**: Funciones y lógica para interactuar con APIs.
  - **styles/**: Archivos CSS y configuraciones de estilos.

- **public/**: Recursos estáticos.
- **README.md**: Este archivo.
- **package.json**: Dependencias y configuración de scripts.

## Uso

- **Exploración de Productos:** Navega por el catálogo para ver las consolas disponibles.
- **Gestión del Carrito:** Agrega productos al carrito, actualiza cantidades y elimina ítems según lo necesites.
- **Proceso de Compra:** Inicia sesión y sigue el flujo de checkout para completar la compra.

## Contribuciones

Las contribuciones son bienvenidas. Para colaborar:

1. Haz un fork del proyecto.
2. Crea una rama para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tu rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request.