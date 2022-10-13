import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({

    name: String,
    year: String,
    director: String,
    genre: String,
    runtime: Number
}, {
    //options
    timestamps: true,
    collection: 'movies'
});

//model is movies we added schema movie schemea
export default mongoose.model('Movies',MovieSchema);