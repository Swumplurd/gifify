import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GridItem } from "../GridItem/GridItem";

export const GifGrid = ({category}) => {

    const {data:gif, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="text-center mt-5 text-uppercase">{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    gif.map(item => {
                        return <GridItem key={item.id} {...item} />
                    })
                }
            </div>
        </>
    )
}