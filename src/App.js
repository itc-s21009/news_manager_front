import React from "react";

import axios from "axios";

class App extends React.Component {
    constructor() {
        super();
        this.state = []
    }

    memberList(list) {
        const memberList = list.map((d) => {
            return (
                <tr>
                    <td>{d["title"]}</td>
                    <td>{d["body"]}</td>
                    <td>{d["post_by"]}</td>
                    <td>{d["publish_at"]}</td>
                </tr>
            );
        });

        return (
            <table className="table table-striped">
                <thead><tr>
                    <th>タイトル</th>
                    <th>本文</th>
                    <th>投稿者</th>
                    <th>投稿日時</th>
                </tr>
                </thead>
                <tbody>
                {memberList}
                </tbody>
            </table>
    )
    }

    render() {
        const url = "http://localhost:8080/news";

        axios.get(url).then(res => {
            // this.setState(Object.entries(res.data).map(d => d[1]));
            this.setState(res.data)
        });
        let json = Object.entries(this.state).map(d => d[1])
        console.log(json);
        console.log(typeof (json));
        return (
            <div>
                {this.memberList(json)}
            </div>
        );
    }
}

export default App