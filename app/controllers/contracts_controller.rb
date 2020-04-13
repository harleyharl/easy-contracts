class ContractsController < ApplicationController

  def show
  end

  def new
  end

  def create
    binding.pry
    @contract = Contract.create(contract_params)
    if @contract.valid?
      render json: { contract: ContractSerializer.new(@contract)}, status: :created
    else
      render json: { error: 'failed to create contract' }, status: :not_acceptable
    end
  end

  def update
  end

  def contract_params
    params.require(:contract).permit(:project_name, :contract_name)
  end
end
