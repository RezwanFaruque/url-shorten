import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const ShortenUrl = () => {
    const [longurl, setLongUrl] = useState({
        long_url: "",
    });

    const [urlData, setUrlData] = useState([]);

    const validationSchema = Yup.object({
        long_url: Yup.string().required("This field is required!"),
    });

    const handleShortenUrl = (values) => {
        axios
            .post("http://127.0.0.1:8000/api/url-shorten", values, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                },
            })
            .then((response) => {
                const data = response.data.data;

                setUrlData([...urlData, data]);
            })
            .catch((error) => {});
    };

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/url-lists", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                },
            })
            .then((response) => {
                const data = response.data.data;
                setUrlData(data);
            })
            .catch((error) => {});
    }, []);

    return (
        <>
            <Formik
                initialValues={longurl}
                validationSchema={validationSchema}
                onSubmit={handleShortenUrl}
            >
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-body">
                            <Form>
                                <div className="form-group">
                                    <label>Longurl</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter url"
                                        name="long_url"
                                    />
                                    <ErrorMessage
                                        className="error"
                                        name="long_url"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Formik>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Longurl</th>
                            <th>Shorturl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urlData.map((url) => {
                            return (
                                <tr key={url.id}>
                                    <td>{url.long_url}</td>
                                    <td>
                                        <a href={url.long_url}>
                                            {url.short_url}
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShortenUrl;
