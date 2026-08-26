class RamenHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="ramen_icon_content">
                <div class="ramenIcon"><a href="index.html"><img src="images/ramenIcon.png" alt=""></a></div>
            </div>

            <div class="header_right">
                <div class="title">ラーメン紹介</div>

                <nav class="nav">
                    <ul>
                        <li><a href="index.html">ホーム</a></li>
                        <li class="has-dropdown">
                            <a href="menu.html">店舗情報▼</a>
                            <ul class="dropdown">
                                <li><a href="store_hanabi.html">麺屋はなび</a></li>
                                <li><a href="menu.html">店舗2</a></li>
                            </ul>
                        </li>
                        <li><a href="rank.html">ランキング</a></li>
                        <li><a href="map.html">ラーメンマップ</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        `;
    }
}

// <ramen-header> というオリジナルタグを登録（名前には必ずハイフン「-」を含めるルールがあります）
customElements.define('ramen-header', RamenHeader);