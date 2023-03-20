import React from 'react';

type endProps = {
    winner: string

}

export default function EndGame({winner}: endProps) {
    function refreshPage() {
        window.location.reload();
    }

    return (<div>
        <h2>{winner}!</h2>
        <button type="button" onClick={refreshPage}>Play Again?</button>
    </div>)
}