import {Table} from 'react-bootstrap';

function Career() {
    return(
        <div className="career">
            <h5 style={{color:'rgb(73, 132, 232)'}}>Work Career
                <div style={{fontSize:'14px', marginTop:'10px', marginBottom:'20px', color:'gray'}}>총 근무기간 6년 6개월</div>
            </h5>
            <div className='careerTable'>
                <Table>
                    <thead>
                        <tr>
                        <th>기간</th>
                            <th>회사명</th>
                            <th>직급/직책</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>2019.07 ~ 2022.04</td>
                            <td><b>주식회사하우스제이</b></td>
                            <td>대리/팀장</td>
                            <td>퇴직</td>
                        </tr>
                        <tr>
                            <td><b>직종</b></td>
                            <td colSpan={'3'} style={{textAlign:'left'}}>웹 디자이너</td>
                        </tr>
                        <tr>
                            <td><b>주요직무 및 업무</b></td>
                            <td colSpan={'3'} style={{textAlign:'left'}}>
                                &lt;카페 24&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 홈페이지(PC, 모바일) 배너 및 팝업 디자인<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 상세 페이지 제작<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 상품 등록<br/>
                                    <br/>
                                &lt;이지어드민&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 상품 관리<br/>
                                    <br/>
                                &lt;그 외&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 네이버 블로그
                            </td>
                        </tr>
                        <tr>
                            <td>2015.11 ~ 2018.12</td>
                            <td><b>타라앤컴퍼니</b></td>
                            <td>주임/팀장</td>
                            <td>퇴직</td>
                        </tr>
                        <tr>
                            <td><b>직종</b></td>
                            <td colSpan={'3'} style={{textAlign:'left'}}>웹 디자이너</td>
                        </tr>
                        <tr>
                            <td><b>주요직무 및 업무</b></td>
                            <td colSpan={'3'} style={{textAlign:'left'}}>
                                &lt;카페 24&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 홈페이지(PC, 모바일) 배너 및 팝업 디자인<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 상세 페이지 제작<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 상품 등록<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 상품 디자인<br/>
                                    <br/>
                                &lt;이지어드민&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 상품 관리<br/>
                                    <br/>
                                &lt;그 외&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 페이스북 및 인스타그램<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 명함 제작
                            </td>
                        </tr>
                        <tr>
                            <td>2015.03 ~ 2015.08</td>
                            <td><b>(주) 영원전기상사</b></td>
                            <td>사원</td>
                            <td>퇴직</td>
                        </tr>
                        <tr>
                            <td><b>직종</b></td>
                            <td colSpan={'3'} style={{textAlign:'left'}}>웹 디자이너</td>
                        </tr>
                        <tr>
                            <td><b>주요직무 및 업무</b></td>
                            <td colSpan={'3'} style={{textAlign:'left'}}>
                                &lt;카페 24&gt;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 홈페이지(PC, 모바일) 배너 및 팝업 디자인<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- 상세 페이지 제작<br/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Career;