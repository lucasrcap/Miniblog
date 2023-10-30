import styles from "./Search.module.css"

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

//components
import PostDetail from "../../components/PostDetail"
import { Link } from 'react-router-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)

    return (
        <div>
            <h2 className="search_Container">Search</h2>
            <div>
                {posts && posts.lenght === 0 && (
                    <div className={styles.nopost}>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to="/" className='btn btn-dark'>
                            Voltar
                        </Link>
                    </div>
                )}
                {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
            </div>
        </div>
    )
}

export default Search