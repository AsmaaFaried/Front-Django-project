import { useState, useEffect } from "react";
import Multiselect from 'multiselect-react-dropdown';

function CreatejobComponent() {
    const [name, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Tags, setTag] = useState([]);
    const [selectedTags, setSelectedTags]= useState([])
    let token = localStorage.getItem("token")
    useEffect(() => {
        fetchTags()
    }, [])
    let onSelect = (selectedList, selectedItem) => {
        setSelectedTags(previous => [...previous, selectedItem])
    }
    let onRemove = (selectedList, removedItem) => {
        setSelectedTags(previous => {
            const old = [...previous];
            old.splice(removedItem);
            return old;
        })
    }

    let fetchTags = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/tags/", {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        const data = await response.json()
        let keys = []
        data.tags.forEach((tag) => {
            keys.push({ key: `${tag.id}`, label: tag.name, value: tag.id })
        })
        setTag(keys)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/jobs/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Token 7bc67ec97ef1d68fccd48efb84addf7199f33e0d"
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    Tags: selectedTags.map(t=>t.value),
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setTitle("");
                setDescription("");
                setTag([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="job-content">

            <div className='w-25 form-card createjobs'>
                <h2 >Job</h2>
                <br />
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="nameField" className="form-label">Title</label>
                        <input type="text" id="nameField" name="name" value={name} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Enter job title" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" name="description" value={description} onChange={(e) => setDescription(e.target.value)} id="exampleFormControlTextarea1" placeholder="Write more details about this job" rows="5"></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tagslist" className="form-label">Tags</label>
                        <Multiselect
                            selectedValues={selectedTags}
                            options={Tags}
                            onSelect={onSelect}
                            onRemove={onRemove}
                            displayValue="label"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Post Job
                    </button>
                </form>
            </div>
            <div className="w-75">
                {/* <img src="../public/images/postjob.jpeg)" alt="image"/> */}
            </div>
        </div>

    )
}

export default CreatejobComponent;