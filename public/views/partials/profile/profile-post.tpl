<div class="container-fluid">
    <div class="row">
        <div class="col-sm-3" style="background-color:lavenderblush;">
            <img src="" class="img-responsive" alt="car"><br/>
        </div>
        <div class="col-sm-2" style="background-color:lavender;">
            <h6>{year}</h6>
            <h5>BYN: {byn}</h5>
            <h5><span class="glyphicon glyphicon-usd"></span>: {usd}</h5>
            <h5><span class="glyphicon glyphicon-euro"></span>: {euro}</h5>
            <h6>{mileage} км</h6>
        </div>
        <div class="col-sm-7" style="background-color:lavender;">
            <h3><b>{brand} {model}</b><small> {date}</small></h3>
            <h6>{fuelType}, {volume} л., {transmission}</h6>
            {text}
            <p><label><span class="glyphicon glyphicon-thumbs-up"></span>{likes}</label></p>
            <div class="input-group">
                <button type="button" class="btn btn-primary">Редактировать</button>
            </div>
        </div><br/>
    </div>
</div><hr/>