import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

function ProfileForm() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    console.log(session.user.token);
    console.log(session.expires);
    console.log(session.user);
    console.log(session.user.userId);
  }

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  console.log(profileImage)

  const handleNameChange = (e) => setName(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    const handleProfileImageChange = async (e) => {
      setProfileImage(e.target.files[0]);
      const config = {
        headers: { Authorization: `Bearer ${session.user.token}` },
      };

      const responsePostImg = await axios.post(
        `https://portacode.up.railway.app/api/user/upload/`,
        setProfileImage,
        config
      );
      console.log(responsePostImg);
    };
  };
  /*   const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("profileImage", profileImage);

    try {
      await axios.post("http://localhost:8080/api/profiles", formData);
      alert("Perfil cargado exitosamente!");
    } catch (err) {
      alert("Ocurrió un error al cargar el perfil");
    }
  }; */

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Nombre:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={name}
          /*    onChange={handleNameChange} */
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
          Dirección:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          value={address}
          /*   onChange={handleAddressChange} */
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Correo electrónico:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          /*    onChange={handleEmailChange} */
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="profileImage"
        >
          Imagen de perfil:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="profileImage"
          type="file"
          accept="image/*"
          /*    onChange={handleProfileImageChange} */
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:
        focus:shadow-outline"
      >
        Cargar perfil
      </button>
    </form>
  );
}

export default ProfileForm;
