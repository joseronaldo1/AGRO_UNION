import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { HeaderLogin } from "../components/HeaderLogin.jsx";
import { FaSearch } from "react-icons/fa"; // Importa el icono FaSearch
import { Header } from "../components/Header.jsx";


export function Usuario() {
  const columns = [
    {
      name: "Nombres",
      selector: (row) => row.nombres,
      sortable: true,
    },
    {
      name: "Apellidos",
      selector: (row) => row.apellidos,
      sortable: true,
    },
    {
      name: "Correo",
      selector: (row) => row.correo,
      sortable: true,
    },
    {
      name: "Dirección",
      selector: (row) => row.direccion,
      sortable: true,
      wrap: true
    },
    {
      name: "Finca",
      selector: (row) => row.finca,
      sortable: true,
    },
    {
      name: "Rol",
      selector: (row) => row.rol,
      sortable: true,
    },
    {
      name: "Acciones",
      selector: (row) => row.acciones,
    },
  ];


  const data = [
    {
      nombres: "Karen Viviana",
      apellidos: "Diaz Guevara",
      correo: "kare@gmail.com",
      direccion: "Pitalito",
      finca: "Yamboro",
      rol: "Administrador",
      observaciones: "Se realizó el registro en condiciones óptimas",
      estado: "Activo",
      acciones: (
        <div>
            <button
  className="bg-[#FFC700] p-2 rounded-lg text-sm font-bold"
  type="button"
  onClick={() => handleOpenModal("Actualizar")}
>
  Actualizar
</button>
<br />
          <button
            className="bg-[#ED6158] p-2 rounded-lg text-sm font-bold mt-2"
            type="button"
            onClick={() => confirmDesactivar(0)}
          >
            Desactivar
          </button>
        </div>
      ),
    },
    {
        nombres: "Karen Viviana",
        apellidos: "Diaz Guevara",
        correo: "kare@gmail.com",
        direccion: "Pitalito",
        finca: "Yamboro",
        rol: "Empleado",
      acciones: (
        <div>
         <button
  className="bg-[#FFC700] p-2 rounded-lg text-sm font-bold "
  type="button"
  onClick={() => handleOpenModal("Actualizar")}
>
  Actualizar
</button>
<br />
          <button
             className="bg-[#ED6158] p-2 rounded-lg text-sm font-bold mt-2"
            type="button"
            onClick={() => confirmDesactivar(0)}
          >
            Desactivar
          </button>
        </div>
      ),
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(""); 
  const [confirmIndex, setConfirmIndex] = useState(null); 

  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    direccion: "",
    finca: "",
    rol: "",
  });

  function handleOpenModal(Registrar) {
    setShowModal(true);
    setModalTitle(Registrar); 
   
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      nombres: "",
      apellidos: "",
      correo: "",
      direccion: "",
      finca: "",
      rol: "",
    });
    handleCloseModal();
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function confirmDesactivar(row) {
    const confirmDesactivar = window.confirm(
      "¿Estás seguro de que deseas desactivar este Usuario?"
    );
    if (confirmDesactivar) {
      console.log("Usuario desactivad0:", row);
    }
  }
  const opcionesUsuario = ["Administrador", "Empleado"]; 
function handleFilter(event) {
    console.log("Texto de búsqueda:", event.target.value);
  }
  return (
    <div>
     { <Header />}
      <div className="w-10/12 ml-28 ">
        {/* Campo de búsqueda */}
        <div className='w-96 bg-[#E5E5E5] flex items-center m-8 rounded-lg border-black '>
          <input
            className='w-full p-2 bg-[#E5E5E5] text-black rounded-lg border'
            type="text"
            onChange={handleFilter}
            placeholder='Buscar'
          />
          <FaSearch size={25} style={{ marginRight: 10 }} /> {/* Utiliza FaSearch en lugar de FaSistrix */}
        </div>
        <button
          className="bg-[#39A900] p-2 rounded-lg text-white font-bold w-32"
          type="button"
          onClick={() => handleOpenModal("Registrar")}
        >
          Registrar
        </button>
        
        {/* DataTable y otros elementos */}
        <DataTable
          columns={columns}
          data={data} 
          title="Usuarios registrados"
          fixedHeader
          pagination
          paginationComponentOptions={{
            rowsPerPageText: "Filas por página",
            rangeSeparatorText: "de",
            selectAllRowsItem: true,
            selectAllRowsText: "Todos",
          }}
          customStyles={{
            head: {
              style: {
                backgroundColor: "#4CAF50", 
              },
            },
            headCells: {
              style: {
                color: "#4CAF50",              },
            },
          }}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50 border-2 border-gray-700"> {/* Ajusta el z-index del modal */}
        <div className="bg-white p-8 rounded-lg w-96 ">
          <h2 className="text-2xl font-bold mb-4">{modalTitle}</h2> {/* Utiliza el estado modalTitle para el título */}
           <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-4">
              <div className="mb-4 col-span-2">
                <label htmlFor="usuario" className="block font-bold">
                  Rol
                </label>
                <select
                  id="rol"
                  name="rol"
                  value={formData.rol}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                >
                  <option value="">Seleccionar</option>
                  {opcionesUsuario.map((opcion) => (
                    <option key={opcion} value={opcion}>
                      {opcion}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="nombres" className="block font-bold">
                  Nombres
                </label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="apellidos" className="block font-bold">
                  Apellidos
                </label>
                <input
                  type="text"
                  id
                  htmlFor="apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="correo" className="block font-bold">
                  Correo
                </label>
                <input
                  type="text"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="finca" className="block font-bold">
                  Finca
                </label>
                <input
                  type="text"
                  id="finca"
                  name="finca"
                  value={formData.finca}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rol" className="block font-bold">
                  Rol
                </label>
                <input
                  type="text"
                  id="rol"
                  name="rol"
                  value={formData.rol}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
             
              <div className="col-span-2 flex justify-end ">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Enviar
                </button>
                <button
                  onClick={handleCloseModal}
                  className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
