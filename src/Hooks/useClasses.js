import axiosSecure from './useAxioxSecure';
import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
    const { data: classesData = [], refetch } = useQuery(
        ["classData"],
        async () => {
          const res = await axiosSecure.get("/selectedClass");
          return res?.data;
        }
      );
    return [classesData, refetch]
};

export default useClasses;