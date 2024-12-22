import s from './SearchBox.module.css'

const SearchBox = ({value, onFilter}) => {
    return (
        <div className={s.dataContainer}>
            <label htmlFor="" className={s.text}>Find contacts by name</label>
            <input type="text" name='text' className={s.typing} value={value} onChange={(e) => onFilter(e.target.value)}/>
        </div>
    )
}
export default SearchBox;