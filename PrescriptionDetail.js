import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PrescriptionDetail() {
  const { id } = useParams();
  const [prescription, setPrescription] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/prescriptions/${id}`)
      .then(res => setPrescription(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (!prescription) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  const styles = {
    container: {
      maxWidth: '700px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#fef4f8',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
    },
    heading: {
      textAlign: 'center',
      color: 'navy',
      marginBottom: '25px',
    },
    label: {
      fontWeight: 'bold',
      color: '#cc0033',
    },
    value: {
      marginBottom: '15px',
      lineHeight: '1.5',
    },
    printButton: {
      display: 'block',
      margin: '30px auto 0',
      backgroundColor: 'navy',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    printButtonHover: {
      backgroundColor: '#003366',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Prescription #{prescription.id}</h2>
      <p style={styles.value}><span style={styles.label}>Patient:</span> {prescription.patient_name}</p>
      <p style={styles.value}><span style={styles.label}>Doctor:</span> {prescription.doctor_name}</p>
      <p style={styles.value}><span style={styles.label}>Medicines:</span><br />{prescription.medicines}</p>
      <p style={styles.value}><span style={styles.label}>Notes:</span><br />{prescription.notes}</p>
      <p style={styles.value}><span style={styles.label}>Date:</span> {new Date(prescription.created_at).toLocaleString()}</p>
      <button
        onClick={handlePrint}
        style={styles.printButton}
        onMouseOver={e => e.currentTarget.style.backgroundColor = styles.printButtonHover.backgroundColor}
        onMouseOut={e => e.currentTarget.style.backgroundColor = styles.printButton.backgroundColor}
      >
        🖨️ Print Prescription
      </button>
    </div>
  );
}

export default PrescriptionDetail;
