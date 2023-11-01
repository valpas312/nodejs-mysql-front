import { useQuery } from "@tanstack/react-query"
import { API_URL } from "../utils/constantes"
import { Spinner } from "@chakra-ui/react";

const Perfil = () => {
const { isLoading, error, data } = useQuery({
    queryKey: ["perfil"],
    queryFn: () => fetch(`${API_URL}/user/1`)
    .then((res) => res.json())
    .then((res) => res[0])
});
  return (
    <>
        {
            isLoading ? <Spinner /> : error ? <p>Error: {error.message}</p> : (
                <>
                    <p>Nombre: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Salario: {data.salary}</p>
                </>
            )
        }
    </>
  )
}

export default Perfil