# 🏦 FinCo - Catálogo de Productos Financieros

FinCo es una aplicación web que muestra de forma detallada los diferentes productos financieros que ofrece un banco ficticio. El objetivo principal del proyecto es brindar una experiencia clara y amigable para que los usuarios conozcan y exploren cada producto disponible.

---

## 🚀 Funcionalidades

- 📋 Visualización de productos financieros de forma organizada.
- 🔍 Filtro por categoría para encontrar productos fácilmente.
- 📄 Página individual para cada producto con descripción detallada.
- 💡 Visualización de beneficios clave de cada producto.

---

## 🛠️ Tecnologías utilizadas

- **Next.js** – Framework de React para SSR y SSG.
- **Tailwind CSS** – Estilos rápidos y personalizados con clases utilitarias.
- **TypeScript** – Tipado estático para mayor seguridad y escalabilidad.
- **Redux Toolkit** – Manejo del estado global, especialmente útil para el sistema de filtros por categoría.

---

## 🧭 Navegación

1. Al ingresar al sitio, se muestran todos los productos del banco.
2. Al seleccionar un producto, el usuario es dirigido a una sección con:
   - Descripción detallada del producto.
   - Lista de beneficios o características.
3. Los productos pueden filtrarse por categorías usando el filtro global implementado con Redux Toolkit.

---
## Preguntas

1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?

  - Tome los criterios del pdf que me mandaro lo lei y de alli entendi la app web que tocaba hacer.

2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

  - Yo por lo general siempre utilizo tailwind para el maquetado, el style components lo utilice mas quetodo en la creacion de las cards y de los botones del filtro dado a que como tenian el mismo diseño solo fue crear un componente y renderizarlo con un map.

3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

  -Tocaria crearle un back end robusto y crearle varias interfaces por ejemplo atencion al cliente, pagos y consignaciones en tiempo real, todo esto bien mostrado con graficas etc.

4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

  -utilizaria: Imágenes optimizadas (next/image) para evitar molestos tiempos de carga, Cacheo y CDN (Vercel, Cloudflare), Evitar renders innecesarios ( lazy load) Monitorear APIs externas (si tu app depende de ellas).

---

## 📦 Instalación y ejecución local

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/finco-app.git

# Entra en la carpeta del proyecto
cd finco-app

# Instala las dependencias
npm install

# Ejecuta el servidor de desarrollo
npm run dev
