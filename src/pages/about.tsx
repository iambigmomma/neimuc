import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>關於內慕</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  為什麼要用”內慕”？
                </h5>
                <p>
                  相較於去美國或其他英語系的國家，德國的相關資訊總是比較少，因此無論是想要來留學、找工作、生活的夥伴們，在剛來的時候都還是需要走很多彎路，
                  才能慢慢適應這個環境。我們走過這一遭，無論是在申請依親簽證或是留學的時候，都犯過許多的錯。為了讓有意願跨出舒適圈的朋友們，能更更有效率地、
                  更舒服地在德國過上愜意的生活。
                </p>
                <h5>
                  關於慕尼黑，這裡給你一個參考
                </h5>
                <p>
                  德國哪有什麼準時或是高效率，一切都是幻覺！就像來德國前，什麼都是美好的，但很快的這個泡泡就破了。我們在2017年決定一起前往德國慕尼黑留學，作為一個新的開始。這過程該經歷都經歷過，例如找房子、申請依親簽證、尋找實習、職涯轉換以及學德語，都很辛苦、很煎熬，會時不時地懷疑自己的決定。

                  但是，一切都克服了。藉由第一年的hard lessons，我們整理出在德國生活的一些基本原則，慢慢瞭解日爾曼民族的歷史以及其中的某些遊戲規則。因此，我們將陸續更新這個網站，從這五大類別的內容慢慢深入德國，希望給你個參考：

                  德國留學：會以在慕尼黑工業大學(TUM)的就讀體驗為主，分享我所認識的各項人事物
                  歐洲職涯：以尋找實習機會、面試心得、德國職場以及正職工作的求職體驗
                  個人想法：也許是在夜深人靜時後，一段內心的獨白或是告解
                  產業小聚：時不時找一些優秀的夥伴們出來認識，分享產業見解或是小道消息
                  冷肖維系列：分享一些雞湯、雞血、幹話。其實德國人也是喜歡聽你說這些
                  如果我們的經驗可以讓你/妳有任何啟發，那阿彌陀佛，也感謝主！

                  最後，歡迎來到慕尼黑！喝喝咖啡，聊聊是非。
                </p>
                <h5>
                  銘謝
                </h5>
                <p>
                  感謝我們的家人，是我們最堅強的後援。

                  感謝我們的朋友，手把手地互相照應，成為彼此的光。

                  更感謝我的太太，有妳的支持，才有現在的我們。

                  最後，謝謝自己。
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
