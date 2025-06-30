import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DepartmentCard from '../../widgets/DepartmentCard';
import { getDepartmentDetails } from '../../services/departmentdetails';
import Banner from '../../widgets/Banner';
import IFrameBanner from '../../widgets/iFrameBanner';
import ContactBanner from '../../widgets/ContactBanner';
import campusBanner from '../../Images/campusfacilitiesbanner.png';

interface Section {
  title: string | null;
  description: string;
}

interface DepartmentData {
  title: string;
  sections: Section[];
  images: string[];
}

const DepartmentDetails: React.FC = () => {
  const { deptId } = useParams<{ deptId: string }>();
  const [data, setData] = useState<DepartmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!deptId) return;

    const fetchData = async () => {
      try {
        const deptData = await getDepartmentDetails(deptId);
        setData(deptData);
      } catch (err) {
        setError('Failed to load department details.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [deptId]);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-danger text-center py-5">{error}</div>;

  return (
    <>
      <Banner
        bannerText={data?.title || 'Department'}
        bannerImageClassName="rgc-student-scholarship-banner"
        breadCrumbsList={[{ label: 'Departments', to: '/departments' }]}
        bannerImageUrl={campusBanner}
      />

      {data && <DepartmentCard title={data.title} sections={data.sections} images={data.images} />}

      <IFrameBanner requiredFooterBorder={false} />
      <ContactBanner />
    </>
  );
};

export default DepartmentDetails;
