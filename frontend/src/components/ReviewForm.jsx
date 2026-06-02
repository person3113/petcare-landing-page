import { useState } from 'react';

const ReviewForm = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !content) {
            alert('이름과 기대평을 모두 입력해주세요.');
            return;
        }

        const reviewData = {
            authorName: name,
            content: content
        };

        fetch('http://localhost:8080/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
        .then((response) => {
            if (response.ok) {
                alert('기대평이 성공적으로 등록되었습니다!');
                setName('');
                setContent('');
            } else {
                alert('등록에 실패했습니다. 다시 시도해주세요.');
            }
        })
        .catch((error) => {
            console.error('Error submitting review:', error);
            alert('서버와 연결할 수 없습니다.');
        });
    };

    return (
        <section className="review-section">
            <h2>기대평 남기기</h2>
            <form onSubmit={handleSubmit} className="review-form">
                <div className="form-group">
                    <label htmlFor="name">이름</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="이름을 입력하세요"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">기대평</label>
                    <textarea 
                        id="content" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        placeholder="서비스에 대한 기대평이나 응원의 한마디를 남겨주세요!"
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">등록하기</button>
            </form>
        </section>
    );
};

export default ReviewForm;
