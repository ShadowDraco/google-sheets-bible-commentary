import React from 'react'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

// https://ckeditor.com/docs/ckeditor5/latest/examples/builds-custom/full-featured-editor.html

import Container from 'react-bootstrap/Container'

export default function index() {
	const dirtyHTML = `
   <p style="text-align:center;">
    <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Mattityahu</span>
</p>
<p>
    &nbsp;
</p>
<p style="text-align:center;">
    <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;"><strong>Outline</strong></span>
</p>
<p>
    &nbsp;
</p>
<ul>
    <li>
        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;"><strong>Arrival of the King</strong></span>
        <ul>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Birth and Early Years&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapters 1:1 - 3:12</span>
                <ul>
                    <li>
                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Genealogy</span>
                        <ul>
                            <li>
                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Son of David, Son of Avraham</span>
                            </li>
                            <li>
                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Source of Jewishness, Father or Mother</span>
                            </li>
                            <li>
                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Mentions women - Tamar, Rahab, Ruth, her (Bathsheba)</span>
                                <ul>
                                    <li>
                                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Left off Sarah and Rebecca</span>
                                    </li>
                                    <li>
                                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Gentile women</span>
                                        <ul>
                                            <li>
                                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Tamar (incest) and Rahab (prostitution) - Canaanites</span>
                                            </li>
                                            <li>
                                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Ruth - Moabite (a descendant of Lot incest)</span>
                                            </li>
                                            <li>
                                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Bathesheba (adultery)- Hittite</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Numerology (14’s)</span>
                        <ul>
                            <li>
                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">3 sets of 14</span>
                                <ul>
                                    <li>
                                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Abraham to David, David to Babylon, Babylon to Christ</span>
                                        <ul>
                                            <li>
                                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Mnemonics - a pattern to God’s messianic plan</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Virgin Birth</span>
                        <ul>
                            <li>
                                <a href="https://biblicalelearning.org/wp-content/uploads/2022/01/Oswalt-AlmahIsa-CTR.pdf"><span style="background-color:transparent;color:#1155cc;font-family:Arial;font-size:13.999999999999998pt;"><u>Almah - paper</u></span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Miscellaneous</span>
                        <ul>
                            <li>
                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">In Mattityahu, Angel appears to Joseph and not to Miriam; however, in Luke the Angel appears to Miriam and not Joseph (LOM v.1 pg. 269)</span>
                            </li>
                            <li>
                                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Jechoniah -</span>
                                <ul>
                                    <li>
                                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">[Mat 1:11-12 NKJV] Mentioned in Geneaology</span>
                                    </li>
                                    <li>
                                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">[Jer 22:24-30 NKJV]&nbsp; </span><a href="https://www.blueletterbible.org/lexicon/h3659/nasb20/wlc/0-1/"><span style="background-color:transparent;color:#1155cc;font-family:Arial;font-size:13.999999999999998pt;"><u>Coniah = Jechoniah</u></span></a>
                                    </li>
                                    <li>
                                        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Problem is only solved with the Virgin Birth, Matthew 1:16 - Joseph was the husband of Miriam, of who was born Yeshua. Emphasis is on Miriam (LOM pg. 280)</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Immersion and Temptations &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapters 3:13 - 4:11</span>
            </li>
        </ul>
    </li>
    <li>
        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;"><strong>Proclamation of the King</strong></span>
        <ul>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Calling the Talmidim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapter 4:12-25</span>
            </li>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Sermon on the Mount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapters 5:1 - 7:29</span>
            </li>
        </ul>
    </li>
    <li>
        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;"><strong>Rejection of the King</strong></span>
        <ul>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Preparing the Talmidim &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapter 16:13 - 28</span>
            </li>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">The Transfiguration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapter 17: 1-13</span>
            </li>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Healings, Teachings, Miracles &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapters 8:1 - 16:12</span>
            </li>
        </ul>
    </li>
    <li>
        <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;"><strong>Crucifixion of the King</strong></span>
        <ul>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">The Final Week Chapters &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21:1 - 26:16</span>
            </li>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">The Last Seder Chapter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26:17 - 56</span>
            </li>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">Yeshua on Trial Chapters&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26:57 - 27:25</span>
            </li>
            <li>
                <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;">The Crucifixion and Burial  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Chapter 27:26 - 66</span>
            </li>
        </ul>
    </li>
</ul>
<p>
    <span style="background-color:transparent;color:#000000;font-family:Arial;font-size:13.999999999999998pt;"><strong>Resurrection of the King</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapter 28: 1 - 20</span>
</p>`

	const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
		USE_PROFILES: { html: true },
	})
	return (
		<Container
			fluid
			className='PastorNotes flex flex-column bg gradient bg-light bg-opacity-25'
		>
			{parse(cleanHTML)}
		</Container>
	)
}
