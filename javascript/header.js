class RamenHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="ramen_icon_content">
                <div class="ramenIcon"><a href="index.html"><img src="images/ramenIcon.png" alt=""></a></div>
            </div>

            <div class="header_right">
                <div class="title">人生らーめん</div>

                <nav class="nav">
                    <ul>
                        <li><a href="index.html">ホーム</a></li>
                        <li class="has-dropdown">
                            <a href="menu.html">店舗情報▼</a>
                            <ul class="dropdown">
                                <li><a href="store_hanabi.html">麺屋はなび</a></li>
                                <li><a href="#">豚山</a></li>
                                <li><a href="#">一番軒</a></li>
                                <li><a href="#">歌志軒</a></li>
                                <li><a href="#">きりめん</a></li>
                                <li><a href="#">しげた</a></li>
                                <li><a href="#">一蘭</a></li>
                                <li><a href="#">ラーメン福</a></li>
                                <li><a href="#">スガキヤ</a></li>
                                <li><a href="#">来来亭</a></li>
                                <li><a href="#">天下一品</a></li>
                                <li><a href="#">町田商店</a></li>
                                <li><a href="#">一風堂</a></li>
                                <li><a href="#">蒙古タンメン中本</a></li>
                                <li><a href="#">ラーメン二郎</a></li>
                                <li><a href="#">魁力屋</a></li>
                            </ul>
                        </li>
                        <li><a href="rank.html">ランキング</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        `;
    }
}

customElements.define('ramen-header', RamenHeader);