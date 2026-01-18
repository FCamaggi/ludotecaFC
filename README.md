# 🎲 Ludoteca Digital

Página web estática para mostrar tu colección de juegos de mesa digitales.

## 📁 Estructura del Proyecto

```
ludoteca/
├── index.html      # Página principal
├── styles.css      # Estilos
├── games.js        # Base de datos de juegos
├── app.js          # Lógica de la aplicación
└── README.md       # Este archivo
```

## 🚀 Cómo Usar

1. **Agregar Juegos**: Edita el archivo `games.js` y agrega tus juegos al array `games`:

```javascript
{
    title: "Nombre del Juego",
    description: "Descripción del juego...",
    image: "url-de-la-imagen.jpg",
    link: "https://enlace-al-juego.com",
    players: "2-4 jugadores",
    duration: "30 min"
}
```

2. **Imágenes**: Puedes usar:
   - URLs de imágenes externas
   - Imágenes locales (crea una carpeta `images/` y referéncialas como `images/nombre.jpg`)
   - Placeholders mientras preparas las imágenes reales

3. **Ver la Página**: Simplemente abre `index.html` en tu navegador

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
}
```

### Modificar el Layout
- Grid responsive automático
- Se adapta a móviles, tablets y desktop
- Edita `.games-grid` en `styles.css` para cambiar columnas

## 📤 Publicar en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings > Pages
4. Selecciona la rama main y carpeta root
5. Tu sitio estará en: `https://tu-usuario.github.io/ludoteca`

## ✨ Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Tarjetas con hover effect
- ✅ Fácil de mantener (solo editar games.js)
- ✅ Sin dependencias externas
- ✅ Listo para GitHub Pages o cualquier hosting estático

## 📝 Ejemplo de Juego Completo

```javascript
{
    title: "Catan Online",
    description: "Los Colonos de Catán en versión digital. Construye, comercia y expande tu territorio.",
    image: "images/catan.jpg",
    link: "https://example.com/catan",
    players: "3-4 jugadores",
    duration: "60-90 min"
}
```
