import { useState, useEffect } from 'react';

const ReviewForm = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [reviews, setReviews] = useState([]);

    const fetchReviews = () => {
        fetch('http://localhost:8080/api/reviews')
            .then(res => res.json())
            .then(data => {
                const latestReviews = data.reverse().slice(0, 5);
                setReviews(latestReviews);
            })
            .catch(err => console.error('fetch 실패', err));
    };

    useEffect(() => {
        fetchReviews();
    }, []);

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
                fetchReviews(); // 작성 후 즉시 갱신
            } else {
                alert('등록에 실패했습니다. 다시 시도해주세요.');
            }
        })
        .catch((error) => {
            console.error('fetch 실패', error);
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

            {reviews.length > 0 && (
                <div className="review-list">
                    <h3 className="review-list-title">최근 기대평</h3>
                    {reviews.map(review => (
                        <div key={review.id} className="review-bubble-container">
                            <div className="review-meta">
                                <span className="review-author">{review.authorName}</span>
                                <span className="review-date">
                                    {review.createdAt ? new Date(review.createdAt).toLocaleString() : ''}
                                </span>
                            </div>
                            <div className="review-bubble">
                                <p>{review.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ReviewForm;
