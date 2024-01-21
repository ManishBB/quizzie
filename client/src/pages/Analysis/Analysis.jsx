import React from 'react'
import styles from './analysis.module.css'
import EditSVG from '../../assets/edit.svg'
import DeleteSVG from '../../assets/delete.svg'
import ShareSVG from '../../assets/share.svg'

function Analysis() {

    const quizAnalysisData = [
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
        { srNo: 1, quiz: 'Quiz 1', createdOn: '2021-01-01', impressions: 100, quizLink: "https://manishbhamare.live" },
        { srNo: 2, quiz: 'Quiz 2', createdOn: '2021-02-01', impressions: 150, quizLink: "https://manishbhamare.live" },
        // Add more quiz analysis data here...
      ];
    
      const handleEditClick = (quizId) => {
        // Handle edit button click logic here...
      };
    
      const handleDeleteClick = (quizId) => {
        // Handle delete button click logic here...
      };
    
      const handleShareClick = (quizId) => {
        // Handle share button click logic here...
      };
    
      const handleQuizAnalysisClick = (quizId) => {
        // Handle quiz analysis button click logic here...
      };

  return (
    <div className={styles.analysisContainer}>
        <h1 className={styles.heading}>Quiz Analysis</h1>
        <div className={styles.tableContainer}>
            <table>
                <thead className={styles.tableHeading}>
                    <tr className={styles.tableHeading}>
                        <th>Sr No</th>
                        <th>Quiz</th>
                        <th>Created On</th>
                        <th>Impressions</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th> 
                    </tr>
                </thead>
                <tbody>
                    {quizAnalysisData.map((data) => (
                        <tr key={data.srNo}>
                            <td>{data.srNo}</td>
                            <td>{data.quiz}</td>
                            <td>{data.createdOn}</td>
                            <td>{data.impressions}</td>
                            <td>
                                <img className={styles.svgIcon} src={EditSVG} alt="Edit SVG" onClick={() => handleEditClick(data.quiz)}/>
                            </td>
                            <td>
                                <img className={styles.svgIcon} src={DeleteSVG} alt="Delete SVG" onClick={() => handleDeleteClick(data.quiz)}/>
                            </td>
                            <td>
                                <img className={styles.svgIcon} src={ShareSVG} alt="Share SVG" onClick={() => handleShareClick(data.quiz)}/>
                            </td>
                            <td>
                                <a href={data.quizLink}>Question Wise Analysis</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Analysis