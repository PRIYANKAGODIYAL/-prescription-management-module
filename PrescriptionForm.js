import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrescriptionForm = () => {
  const [formData, setFormData] = useState({
    patient_name: '',
    doctor_name: '',
    medicines: '',
    notes: '',
  });

  useEffect(() => {
    document.body.style.backgroundColor = '#fff0f5'; 
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/prescriptions', formData);
      alert('Prescription saved successfully!');
      setFormData({
        patient_name: '',
        doctor_name: '',
        medicines: '',
        notes: '',
      });
    } catch (err) {
      console.error(err);
      alert('Failed to save prescription');
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '60px auto',
      padding: '40px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Segoe UI, Roboto, sans-serif',
      borderTop: '10px solid navy',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '30px',
      color: 'navy',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontWeight: '500',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '20px',
      border: '2px solid pink',
      borderRadius: '6px',
      fontSize: '15px',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      height: '90px',
      border: '2px solid pink',
      borderRadius: '6px',
      fontSize: '15px',
      resize: 'vertical',
      marginBottom: '20px',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: 'crimson',
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#b0003a',
    },
  };

  const [hovered, setHovered] = useState(false);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Prescription</h2>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>Patient Name:</label>
        <input
          style={styles.input}
          type="text"
          name="patient_name"
          value={formData.patient_name}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Doctor Name:</label>
        <input
          style={styles.input}
          type="text"
          name="doctor_name"
          value={formData.doctor_name}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Medicines:</label>
        <textarea
          style={styles.textarea}
          name="medicines"
          value={formData.medicines}
          onChange={handleChange}
          required
        ></textarea>

        <label style={styles.label}>Notes:</label>
        <textarea
          style={styles.textarea}
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          style={{ ...styles.button, ...(hovered ? styles.buttonHover : {}) }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Save Prescription
        </button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
