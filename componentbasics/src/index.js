import { faker } from "@faker-js/faker"
import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";

import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail author='Sam' timeAgo='Today at 4:45 PM' content='Nice!' avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author='Alex' timeAgo='Today at 5:00 AM' content='Cool!' avatar={faker.image.avatar()} />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author='Jane'
                    timeAgo='Yesterday at 4:45 PM'
                    content='Awesome!'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
