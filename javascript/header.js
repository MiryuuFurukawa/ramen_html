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
                            <a href="#">店舗情報▼</a>
                            <ul class="dropdown">
                                <li><a href="store_hanabi.html">麺屋はなび</a></li>
                                <li><a href="#">桐麺</a></li>
                                <li><a href="#">歌志軒</a></li>
                                <li><a href="#">尊</a></li>
                                <li><a href="#">英吉家</a></li>
                                <li><a href="#">バリバリ軒</a></li>
                                <li><a href="#">つけ麺丸和</a></li>
                                <li><a href="#">柳橋 さんりょう</a></li>
                                <li><a href="#">つけ麺繁田</a></li>
                                <li><a href="#">豚山</a></li>
                                <li><a href="#">一番軒</a></li>
                                <li><a href="#">威風堂々</a></li>
                                <li><a href="#">二兎</a></li>
                                <li><a href="#">達磨食堂</a></li>
                                <li><a href="#">六弦</a></li>
                                <li><a href="#">本郷亭</a></li>
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