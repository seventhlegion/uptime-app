'use client';
import Average from '@/components/template/Average';
import Comparison from '@/components/template/Comparison';
import Response from '@/components/template/Response';
import Services from '@/components/template/Services';
import { useNavigation } from '@/store/useNavigation';

const Home = () => {
	const { defaultSelect } = useNavigation();
	return (
		<>
			{defaultSelect === 'Services' && <Services />}
			{defaultSelect === 'Average' && <Average />}
			{defaultSelect === 'Comparison' && <Comparison />}
			{defaultSelect === 'Response' && <Response />}
		</>
	);
};

export default Home;
