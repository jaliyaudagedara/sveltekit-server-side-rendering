export const prerender = false;

export async function load({ params }) {

    console.log('SvelteKit load function processed a request.');
    return {
        items: [
            {
                id: '1',
                title: 'Item 1',
                price: 100
            },
            {
                id: '2',
                title: 'Item 2',
                price: 200
            }
        ]
    };
}