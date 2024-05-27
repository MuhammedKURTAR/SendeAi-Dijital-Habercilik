import React, { useState } from 'react';

const UploadNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();
    // Haber yükleme işlemleri burada yapılacak
    console.log('Haber Yüklendi:', { title, content });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Haber Yükle</h2>
              <form onSubmit={handleUpload}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Başlık</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">İçerik</label>
                  <textarea
                    className="form-control"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Yükle</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadNews;
