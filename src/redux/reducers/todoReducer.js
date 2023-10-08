//  REDUCER
/*
Store'un nasıl değişeceğine karar verir.
Reducer normal bir fonksiyondur.

2 Parametre alır;

- state: reducer'ın yönettiği verinin son durumu
- action: store'un nasıl etkilenmesi gerektiğini belirten proje

*/

// initialState -> başlangıç değeri.
//  bu başlangıç değeri ilk anda reducer'a tanımlanmalı.

const initialState = {
    todos: [],  // todoları başlangıçta boş bıraktık...
    sayi: 0,   // todo sayılarını sıfır bıtaktık...
    isEmpty: true,  // todolar boş mu değeri true
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        // ekleme aksiyonu çağırılırsa state'e yeni elemanı ekler
        case 'ADD_TODO':
            // payloadla gelen veriyi state'e ekler
            const newTodos = [...state.todos, action.payload];
            // store'u günceller
            return { ...state, todos: newTodos };

        // todoyu store'dan kaldır
        case 'DELETE_TODO':
            // silinecek elemanı diziden çıkarma
            const filtred = state.todos.filter(
                (item) => item.id !== action.payload);

            return { ...state, todos: filtred };

        // elemanı günceller
        case 'UPDATE_TODO':
            // güncellenecek eleman dışında diğer tüm elemanlar sabit tutulur.    

            // 1.YÖNTEM ; 
            // const updatedArr = state.todos.map((item) =>
            //     item.id !== action.payload.id ? item : action.payload);

            // 2. YÖNTEM ;
            const clone = [...state.todos];

            const index = clone.findIndex((item) =>
                item.id === action.payload.id);

            clone[index] = action.payload;

            return { ...state, todos: clone };

        default:
            return state;
    }
};

export default todoReducer;