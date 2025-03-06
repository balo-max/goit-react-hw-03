import css from './SearchBox.module.css'

export default function SearchBox({value, onSearch, id}) {
    return (
        <div className={css.searchWrapper}>
            <label className={css.searchLabel} htmlFor={id}>Find contacts by name</label>
            <input className={css.searchInput} value={value} type="text" name="username" id={id} onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
};