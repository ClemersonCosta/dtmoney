import { Container } from './styles';

export function TransactionsTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className='deposit'>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>06/02/2022</td>
                    </tr>

                    <tr>
                        <td>Energia</td>
                        <td className='withdraw'>- R$300</td>
                        <td>Casa</td>
                        <td>01/02/2022</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className='deposit'>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>06/02/2022</td>
                    </tr>

                    <tr>
                        <td>Internet</td>
                        <td className='withdraw'>- R$100</td>
                        <td>Casa</td>
                        <td>01/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}