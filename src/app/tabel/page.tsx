'use client';

import react from "react";
import styles from "./tabelPage.module.css"

export default function Home() {
  const [isVisible, setIsVisible] = react.useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const data = [
    { no: 1, nim: '1234567890', nama: 'John Doe', gender: 'Laki-laki', prodi: 'Teknik Informatika', kelas: 'TI-1A', semester: 3, alamat: 'Jalan Merdeka No.10', hobby: 'Bermain Game', citaCita: 'Menjadi Software Engineer' },
    { no: 2, nim: '0987654321', nama: 'Jane Smith', gender: 'Perempuan', prodi: 'Desain Komunikasi Visual', kelas: 'DKV-2B', semester: 5, alamat: 'Jalan Sejahtera No.20', hobby: 'Membaca Buku', citaCita: 'Menjadi Desainer Grafis' },
    { no: 3, nim: '1122334455', nama: 'Alice Johnson', gender: 'Perempuan', prodi: 'Sistem Informasi', kelas: 'SI-3C', semester: 6, alamat: 'Jalan Pahlawan No.15', hobby: 'Olahraga', citaCita: 'Menjadi Data Scientist' },
    { no: 4, nim: '6677889900', nama: 'Bob Lee', gender: 'Laki-laki', prodi: 'Manajemen Bisnis', kelas: 'MB-1D', semester: 4, alamat: 'Jalan Raya No.30', hobby: 'Fotografi', citaCita: 'Menjadi Pengusaha' }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Daftar Mahasiswa</h1>

      <div className="text-center mb-4">
        <button 
          className="btn btn-info btn-lg" 
          onClick={toggleVisibility}
        >
          {isVisible ? 'Hide Tabel' : 'Show Tabel'}
        </button>
      </div>

      <div className={`table-container ${isVisible ? 'd-block' : 'd-none'}`}>
        <table className="table table-bordered table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>NIM</th>
              <th>Nama</th>
              <th>Gender</th>
              <th>Prodi</th>
              <th>Kelas</th>
              <th>Semester</th>
              <th>Alamat</th>
              <th>Hobby</th>
              <th>Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr key={student.no}>
                <td>{student.no}</td>
                <td>{student.nim}</td>
                <td>{student.nama}</td>
                <td>{student.gender}</td>
                <td>{student.prodi}</td>
                <td>{student.kelas}</td>
                <td>{student.semester}</td>
                <td>{student.alamat}</td>
                <td>{student.hobby}</td>
                <td>{student.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
