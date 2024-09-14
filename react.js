const initialData = ['MONTH 1','Onboarding Call','Google Search Console Access','Website Access','Technical Audit','Anchor Text Semantic Analysis','Competitor Analysis','Anchor Text / URL Mapping','Google Data Studio Report + Local Reporting Suite','Site Level Optimization','On Page Optimization','Content Creation','Content Publishing','Premium Press Release','Autority Niche Placements','Review Management','Index Links','Video Recap'];

const updatedData = initialData.map((item,index)=>({id:++index,name:item,col2: '', col3: '', col4: ''}))

const EditableData = () => {

    const [data, setData] = React.useState(updatedData);


    const handleInputChange = (e, id, field) => {
        const newValue = e.target.value;
        const updatedData = data.map(item =>
            item.id === id ? { ...item, [field]: newValue } : item
        );
        setData(updatedData);
    };

    const handleBlur = (id) => {
        const item = data.find(item => item.id === id);

        console.log(`Posting data for ID ${id}:`, item);
        // User can make the api call here .
    };

    return (
        <div className="container">
            {data.map((item) => (
                <div key={item.id} className="box">
                    <form className="form">
                        <input
                            type="text"
                            value={item.name}
                            className="heading-input"
                            onChange={(e) => handleInputChange(e, item.id, 'name')}
                            onBlur={() => handleBlur(item.id)}
                        />
                        <input
                            type="text"
                            value={item.col2}
                            onChange={(e) => handleInputChange(e, item.id, 'col2')}
                            onBlur={() => handleBlur(item.id)}
                        />
                        <input
                            type="text"
                            value={item.col3}
                            onChange={(e) => handleInputChange(e, item.id, 'col3')}
                            onBlur={() => handleBlur(item.id)}
                        />
                        <input
                            type="text"
                            value={item.col4}
                            onChange={(e) => handleInputChange(e, item.id, 'col4')}
                            onBlur={() => handleBlur(item.id)}
                        />
                    </form>
                </div>
            ))}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<EditableData />)



