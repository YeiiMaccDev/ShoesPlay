import { useDispatch, useSelector } from 'react-redux';
import { shoesPlayApi } from '../api';
// import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';
import { onCheckingCategories, onLoadCategories } from '../store'

export const useCategoryStore = () => {

    const dispatch = useDispatch();
    const { categories, isLoadingCategories } = useSelector(state => state.categories);


    const startLoadingCategories = async () => {
        dispatch(onCheckingCategories());
        try {
            const { data } = await shoesPlayApi.get('/categories/');
            // const categoriesData = data.categories;
            console.log('startLoadingCategories', data.categories)
            dispatch(onLoadCategories(data.categories));

        } catch (error) {
            // dispatch( onLogout('Credenciales incorrectas') );
            console.log(error)
            setTimeout(() => {
                // dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    // const { status, user, errorMessage } = useSelector( state => state.auth );
    // const dispatch = useDispatch();

    // const startLogin = async({ email, password }) => {
    //     dispatch( onChecking() );
    //     try {
    //         const { data } = await shoesPlayApi.post('/auth/login',{ email, password });
    //         localStorage.setItem('token', data.token );
    //         localStorage.setItem('token-init-date', new Date().getTime() );
    //         dispatch( onLogin({ name: data.name, uid: data.uid }) );

    //     } catch (error) {
    //         dispatch( onLogout('Credenciales incorrectas') );
    //         setTimeout(() => {
    //             // dispatch( clearErrorMessage() );
    //         }, 10);
    //     }
    // }

    // const startRegister = async({ email, password, name }) => {
    //     dispatch( onChecking() );
    //     try {
    //         const { data } = await shoesPlayApi.post('/auth/new',{ email, password, name });
    //         localStorage.setItem('token', data.token );
    //         localStorage.setItem('token-init-date', new Date().getTime() );
    //         dispatch( onLogin({ name: data.name, uid: data.uid }) );

    //     } catch (error) {
    //         dispatch( onLogout( error.response.data?.msg || '--' ) );
    //         setTimeout(() => {
    //             dispatch( clearErrorMessage() );
    //         }, 10);
    //     }
    // }


    // const checkAuthToken = async() => {
    //     const token = localStorage.getItem('token');
    //     if ( !token ) return dispatch( onLogout() );

    //     try {
    //         const { data } = await shoesPlayApi.get('auth/renew');
    //         localStorage.setItem('token', data.token );
    //         localStorage.setItem('token-init-date', new Date().getTime() );
    //         dispatch( onLogin({ name: data.name, uid: data.uid }) );
    //     } catch (error) {
    //         localStorage.clear();
    //         dispatch( onLogout() );
    //     }
    // }

    // const startLogout = () => {
    //     localStorage.clear();
    //     dispatch(onLogout());
    // }



    return {
        //* Propiedades
        // errorMessage,
        categories,
        isLoadingCategories,

        //* Métodos
        startLoadingCategories,
        // checkAuthToken,
        // startLogin,
        // startLogout,
        // startRegister,
    }

}