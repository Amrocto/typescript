enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}

async function getFags(req:{topicID:number, status:QuestionStatus.PUBLISHED}):Promise <{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
}[]> {
    const res = await fetch('/faqs', {
        method:'POST',
        body:JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}



const arr : number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const evens:number[] = arr.filter((el:number) => el%2 === 0);

console.log(evens);