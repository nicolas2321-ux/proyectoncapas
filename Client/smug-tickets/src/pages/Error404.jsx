
const Error404 = () => {

    return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Oops!</h1>
        <p className="text-4xl text-gray-600 mb-4">Error 404</p>
        {/* Cambia la URL del siguiente GIF con la URL de tu elección */}
        <img src="https://media.tenor.com/o0lrdNm2BawAAAAC/aqua-cry-cute-aqua.gif" alt="GIF" className="mx-auto mb-4 rounded" />
        <p className="text-lg text-gray-600 mb-4">La página que estás buscando no existe.</p>
      </div>
    </div>
  );
};

export default Error404;